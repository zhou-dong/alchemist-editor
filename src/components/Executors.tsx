import React from "react";
import { connect } from "react-redux";
import MobileStepper from "@material-ui/core/MobileStepper";
import IconButton from "@material-ui/core/IconButton";
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
import { defaultSpeed } from "../configurations"
import Document from "../models/document";
import { StoreState } from "../store";

const styles = {
    main: {
        // backgroundColor: "#073642",
        // borderTop: "1px solid",
        height: "32px",
        lineHeight: "32px",
    },
    icon: {
        width: 20,
        height: 20,
    },
    activatedIcon: {
        width: 20,
        height: 20,
        color: "green",
    },
    iconButton: {
        margin: 0,
        padding: 1,
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
    speed: number;
}

const mapStateToProps = (storeState: StoreState) => {
    return storeState.documents[storeState.activated];
};

class Executor extends React.Component<Document, State> implements Animatable {
    private readonly invalid = -1;
    private timer: any = -1;

    readonly state = {
        speed: defaultSpeed,
        isReadyToAnimate: false,
        currentStep: 0,
        totalSteps: 0,
        hasPrevious: false,
        hasNext: false,
        isRunning: false,
        actionsIterator: emptyIterator,
    }

    private readonly handleBuildClick = (that: React.Component<Document, State>) => {
        const parentHTML = document.getElementById(this.props.id) as HTMLElement
        parentHTML.innerHTML = ""

        import("alchemist-core").then(alchemist => {
            class Stack<T> extends alchemist.Stack<T> {
                constructor() {
                    super(parentHTML);
                }
            }

            const actionsIterator: ListIterator<Action> = eval(that.props.content + "; stack.listIterator()");

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
        this.start(this.state.speed);
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

    private readonly getPlayButton = () => {
        if (this.state.isRunning) {
            return (
                <IconButton onClick={this.handlePause} style={styles.iconButton} >
                    <Pause style={styles.activatedIcon} />
                </IconButton>
            );
        } else {
            return (
                <IconButton
                    style={styles.iconButton}
                    onClick={this.handlePlayClick}
                    disabled={this.state.currentStep === this.state.totalSteps}>
                    <Play />
                </IconButton>
            );
        }
    }

    private readonly getRefreshButton = () => (
        <IconButton onClick={this.handleRefreshClick} style={styles.iconButton}>
            <Refresh style={styles.activatedIcon} />
        </IconButton>
    )

    private readonly getStepper = () => (
        <React.Fragment>
            <MobileStepper
                style={{ padding: 0 }}
                variant="progress"
                steps={this.state.totalSteps + 1}
                position="static"
                activeStep={this.state.currentStep}
                nextButton={
                    <Button size="small"
                        onClick={this.handleNext}
                        disabled={this.state.currentStep === this.state.totalSteps}>
                        Next<KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={this.handleBack} disabled={this.state.currentStep === 0}>
                        <KeyboardArrowLeft />Back
                    </Button>
                }
            />
        </React.Fragment>
    );

    render() {
        return (
            <Grid container style={styles.main as React.CSSProperties}>
                <Grid item xs={2}>
                    <IconButton onClick={() => { this.handleBuildClick(this) }} style={styles.iconButton}>
                        <Build style={styles.activatedIcon} />
                    </IconButton>
                    {this.state.isReadyToAnimate && this.getPlayButton()}
                    {this.state.isReadyToAnimate && this.getRefreshButton()}
                </Grid>
                <Grid item xs={10}>
                    {this.state.isReadyToAnimate && this.getStepper()}
                </Grid>
            </Grid>
        );
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

export default connect(mapStateToProps, {})(Executor)