import React from "react";
import { connect } from "react-redux";
import MobileStepper from "@material-ui/core/MobileStepper";
import Grid from "@material-ui/core/Grid";
import Build from "@material-ui/icons/Build";
import Play from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import Refresh from "@material-ui/icons/Refresh";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Animatable from "alchemist-core/dist/commons/animatable";
import { Action, ListIterator } from "alchemist-core";
import StoreState from "../store/state";

const speeds = [1500, 1200, 900, 600, 300];

const styles = {
    main: {
        backgroundColor: "#002B36",
        paddingLeft: "8px",
    },
    icon: {
        width: 20,
        height: 20,
    },
    iconButton: {
        margin: 0,
        padding: 1,
        fontFamily: "inherit",
    }
}

const emptyAction: Action = { animate: () => { } };
const emptyIterator: ListIterator<Action> = {
    previous: () => emptyAction,
    hasPrevious: () => false,
    previousIndex: () => -1,
    next: () => emptyAction,
    hasNext: () => false,
    nextIndex: () => -1,
    size: () => 0,
    rewind: () => { },
}

interface State {
    isReadyToAnimate: boolean;
    actionsIterator: ListIterator<Action>;
    currentStep: number;
    totalSteps: number;
    hasPrevious: boolean;
    hasNext: boolean;
    isRunning: boolean;
    speedIndex: number;
}

interface Props {
    parentId: string;
    content: string;
    extension: string | undefined;
}

class Executor extends React.Component<Props, State> implements Animatable {
    private readonly invalid = -1;
    private timer: any = -1;
    private speedIndex = 2;

    readonly state = {
        isReadyToAnimate: false,
        currentStep: 0,
        totalSteps: 0,
        hasPrevious: false,
        hasNext: false,
        isRunning: false,
        actionsIterator: emptyIterator,
        speedIndex: 2,
    }

    private readonly handleBuildClick = (that: React.Component<Props, State>) => {
        import("alchemist-core").then(alchemist => {
            if (that.props.extension !== "js") {
                return;
            }

            const parentHTML = document.getElementById(that.props.parentId) as HTMLElement
            parentHTML.innerHTML = ""

            let instance = null;
            class Stack<T> extends alchemist.Stack<T> {
                constructor() {
                    super(parentHTML);
                    instance = this;
                }
            }

            class Queue<T> extends alchemist.Queue<T> {
                constructor() {
                    super(parentHTML);
                    instance = this;
                }
            }

            const actions = new alchemist.Actions([]);
            const snapshots = ([] as any);
            const TreeNode = (val: string) => {
                return alchemist.TreeNode(val, snapshots, actions, parentHTML);
            }

            // const actionsIterator: ListIterator<Action> = eval(that.props.content + "; instance.listIterator()");

            // eslint-disable-next-line
            eval(that.props.content);
            const actionsIterator: ListIterator<Action> = actions;

            that.setState({
                actionsIterator: actionsIterator,
                totalSteps: actionsIterator.size(),
                currentStep: actionsIterator.nextIndex(),
                hasPrevious: actionsIterator.hasPrevious(),
                hasNext: actionsIterator.hasNext(),
                isReadyToAnimate: true,
            });
        });
    }

    private readonly handleRefreshClick = () => {
        this.state.actionsIterator.rewind();
        this.updateStep();
    }

    private readonly handleBack = () => {
        this.state.actionsIterator.previous().animate();
        this.updateStep();
    }

    private readonly handleNext = () => {
        this.state.actionsIterator.next().animate();
        this.updateStep();
    }

    private readonly handlePlayClick = () => {
        console.log(this.speedIndex);
        this.start(speeds[this.speedIndex]);
    }

    private readonly handlePause = () => {
        this.pause();
    }

    private readonly updateStep = () => {
        this.setState({
            currentStep: this.state.actionsIterator.nextIndex(),
            hasPrevious: this.state.actionsIterator.hasPrevious(),
            hasNext: this.state.actionsIterator.hasNext(),
        });
    }

    private readonly handleSlower = () => {
        this.setState({
            speedIndex: this.state.speedIndex - 1
        })
        --this.speedIndex;
        if (this.state.isRunning) {
            this.handlePause();
            this.handlePlayClick();
        }
    }

    private readonly handleFaster = () => {
        this.setState({
            speedIndex: this.state.speedIndex + 1
        })
        ++this.speedIndex;
        if (this.state.isRunning) {
            this.handlePause();
            this.handlePlayClick();
        }
    }

    private readonly getPlayButton = () => {
        if (this.state.isRunning) {
            return (
                <Button onClick={this.handlePause} style={styles.iconButton} size="small" color="primary" >
                    <Pause /> Pause
                </Button>
            );
        } else {
            return (
                <Button
                    size="small"
                    style={styles.iconButton}
                    onClick={this.handlePlayClick}
                    color="primary"
                    disabled={this.state.currentStep === this.state.totalSteps}>
                    <Play />
                    Play
                </Button>
            );
        }
    }

    private readonly getRefreshButton = () => (
        <Button onClick={this.handleRefreshClick} style={styles.iconButton} size="small" color="primary" >
            <Refresh /> Refresh
        </Button>
    )

    private readonly getStepper = () => (
        <React.Fragment>
            <MobileStepper
                color="primary"
                style={{ padding: 0, backgroundColor: "#01313f" }}
                variant="progress"
                steps={this.state.totalSteps + 1}
                position="static"
                activeStep={this.state.currentStep}
                nextButton={
                    <Button
                        style={styles.iconButton}
                        size="small"
                        color="primary"
                        onClick={this.handleNext}
                        disabled={this.state.currentStep === this.state.totalSteps}>
                        Next<KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button
                        style={styles.iconButton}
                        size="small"
                        color="primary"
                        onClick={this.handleBack}
                        disabled={this.state.currentStep === 0}>
                        <KeyboardArrowLeft />Back
                    </Button>
                }
            />
        </React.Fragment>
    );

    private readonly getSpeedo = () => (
        <MobileStepper
            color="secondary"
            style={{ padding: 0, backgroundColor: "#01313f" }}
            steps={speeds.length}
            position="static"
            activeStep={this.state.speedIndex}
            nextButton={
                <Button
                    style={styles.iconButton}
                    size="small"
                    color="primary"
                    onClick={this.handleFaster}
                    disabled={this.state.speedIndex === speeds.length - 1}>
                    Faster<KeyboardArrowRight />
                </Button>
            }
            backButton={
                <Button
                    style={styles.iconButton}
                    size="small"
                    color="primary"
                    onClick={this.handleSlower}
                    disabled={this.state.speedIndex === 0}>
                    <KeyboardArrowLeft />Slower
                </Button>
            }
        />
    );

    private readonly readyToAnimate = (): boolean => {
        return this.props.extension === "js" && this.state.isReadyToAnimate
    }

    private readonly getBuildBar = () => (
        <Grid container style={styles.main as React.CSSProperties}>
            <Grid item xs={1}>
                <Button
                    disabled={this.props.extension !== "js"}
                    onClick={() => { this.handleBuildClick(this) }}
                    color="primary"
                    style={styles.iconButton}>
                    <Build />
                    Build
                </Button>
            </Grid>
            <Grid item xs={1}>
                {this.readyToAnimate() && this.getPlayButton()}
            </Grid>
            <Grid item xs={1}>
                {this.readyToAnimate() && this.getRefreshButton()}
            </Grid>
            <Grid item xs={5}>
                {this.readyToAnimate() && this.getStepper()}
            </Grid>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={3}>
                {this.readyToAnimate() && this.getSpeedo()}
            </Grid>
        </Grid>
    );

    render() {
        // return this.props.extension === "js" ? this.getBuildBar() : <React.Fragment></React.Fragment>;
        return this.getBuildBar();
    }

    isRunning(): boolean {
        return this.timer !== this.invalid;
    }

    start(speed: number): void {
        if (this.isRunning()) {
            this.pause();
        }
        this.timer = setInterval(() => {
            if (this.state.hasNext) {
                this.handleNext();
            } else {
                this.pause();
            }
        }, speed);
        this.setState({
            isRunning: true
        });
    }

    pause(): void {
        clearTimeout(this.timer);
        this.timer = this.invalid;
        this.setState({
            isRunning: false
        });
    }

    restart(speed: number): void {
        this.pause();
        this.handleNext();
        this.start(speed);
    }
}

const mapStateToProps = (storeState: StoreState) => {
    const { id, content, extension } = storeState.activated;
    return { parentId: id, content, extension };
};

export default connect(mapStateToProps, {})(Executor)
