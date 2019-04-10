export const getExtension = (filename: string): string | undefined => filename.split(".").pop();

export const getMode = (filename: string): string | undefined => {
    switch (getExtension(filename)) {
        case "js": return "javascript";
        case "md": return "markdown";
        default: return "plain_text";
    }
}
