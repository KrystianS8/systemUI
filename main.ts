//% weight=100 color=#00AEEF icon="⚙"
namespace systemui {

    // SAVE FILE MENU MODE
    //% blockNamespace=systemui
    //% block="save menu mode"
    export enum SaveMenuMode {
        //% block="story"
        Story,
        //% block="minimenu"
        Minimenu
    }

    // SHOW SAVE FILES USING MODE
    //% group="Saving"
    //% block="show save files using %mode"
    //% mode.defl=SaveMenuMode.Story
    export function showSaveFiles(mode: SaveMenuMode) {
        let f1 = "File 1: " + (settings.readNumber("save1percent") || 0) + "%"
        let f2 = "File 2: " + (settings.readNumber("save2percent") || 0) + "%"
        let f3 = "File 3: " + (settings.readNumber("save3percent") || 0) + "%"

        if (mode == SaveMenuMode.Story) {
            story.showPlayerChoices(f1, f2, f3)
        }
        // Minimenu intentionally not implemented (your version has no minimenu support)
    }

    // SET SAVE PERCENT
    //% group="Saving"
    //% block="set save percent for file %file to %percent %%"
    //% file.min=1 file.max=3
    //% percent.min=0 percent.max=100
    export function setSavePercent(file: number, percent: number) {
        if (percent > 100) percent = 100
        if (percent < 0) percent = 0
        settings.writeNumber("save" + file + "percent", percent)
    }

    // SAVE NUMBER FOR FILE
    //% group="Saving"
    //% block="save number for file %file to %value"
    //% file.min=1 file.max=3
    export function saveNumberForFile(file: number, value: number) {
        settings.writeNumber("file" + file + "save", value)
    }
}
