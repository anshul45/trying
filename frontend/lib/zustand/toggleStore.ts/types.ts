export type ToggleState = {
    showPipeline:boolean;
    showInputBox:boolean;
    showSideBar:boolean;
    updateShowPipeline: () => void
    updateShowInputBox:() => void
    updateShowSideBar:() => void
}