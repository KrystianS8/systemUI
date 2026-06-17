//% weight=100 color=#00AEEF icon="⚙"
namespace systemui {

    // LOADER SPRITE KIND
    //% block="loader"
    export const LoaderKind = SpriteKind.create()
    // SAVER SPRITE KIND
    //% block="saver"
    export const SaverKind = SpriteKind.create()
    


    // -------------------------
    //  LOADING GROUP
    // -------------------------

    // CREATE LOADING SPRITE
    //% group="Loading"
    //% block="create loading sprite"
    //% blockSetVariable=load
    export function createLoadingSprite(): Sprite {
        let s = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 8 8 8 8 8 . . . . . . . 
            . . . 8 . . . . . . 9 9 . . . . 
            . . . . . 8 . . . . 9 . . . . . 
            . . . . 8 8 . . . . . 9 . . . . 
            . . . . . . . 9 9 9 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
        `, LoaderKind)
        return s
    }
    

    // POSITION LOADER
    //% group="Loading"
    //% block="position loading %load"
    //% load.shadow=variables_get
    export function positionLoader(load: Sprite) {
        load.setPosition(135, 102)
    }


    // ANIMATE LOADING
    //% group="Loading"
    //% block="animate loading %load"
    //% load.shadow=variables_get
    export function animateLoading(load: Sprite) {
        animation.runImageAnimation(load, [
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 8 8 8 8 8 . . . . . . . 
                . . . 8 . . . . . . 9 9 . . . . 
                . . . . . 8 . . . . 9 . . . . . 
                . . . . 8 8 . . . . . 9 . . . . 
                . . . . . . . 9 9 9 9 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
            `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 8 8 8 8 8 9 9 . . . . . 
                . . . 8 . . . . . 9 . . . . . . 
                . . . . . 8 . . . . . 9 . . . . 
                . . . . 8 8 . . . . . 9 . . . . 
                . . . . . . . 9 9 9 9 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
            `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 8 8 8 8 8 . . . . 
                . . . . 9 9 . . . . . . 8 . . . 
                . . . . . 9 . . . . 8 . . . . . 
                . . . . 9 . . . . . 8 8 . . . . 
                . . . . . 9 9 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
            `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 8 8 8 8 8 . . . . 
                . . . . 9 9 . . . . . . 8 . . . 
                . . . . . 9 . . . . . . 8 . . . 
                . . . . 9 . . . . . 8 . . . . . 
                . . . . . 9 9 9 9 . 8 8 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
            `
        ], 450, true)
    }


    // STOP LOADING
    //% group="Loading"
    //% block="stop loading %load after %time ms"
    //% load.shadow=variables_get
    //% time.shadow=timePicker
    export function stopLoading(load: Sprite, time: number) {
        pause(time)
        animation.stopAnimation(animation.AnimationTypes.All, load)
        load.destroy()
    }



    // -------------------------
    //  SAVING GROUP
    // -------------------------

    // CREATE SAVING SPRITE
    //% group="Saving"
    //% block="create saving sprite"
    //% blockSetVariable=save
    export function createSavingSprite(): Sprite {
        let save = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 8 8 8 8 8 . . . . . . . 
            . . . 8 . . . . . . 9 9 . . . . 
            . . . . . 8 . . . . 9 . . . . . 
            . . . . 8 8 . . . . . 9 . . . . 
            . . . . . . . 9 9 9 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
        `, SaverKind)

        return save
    }
    

    // POSITION SAVER
    //% group="Saving"
    //% block="position saving %save"
    //% save.shadow=variables_get
    export function positionSaver(save: Sprite) {
        save.setPosition(139, 20)
    }


    // ANIMATE SAVING
    //% group="Saving"
    //% block="animate saving %save"
    //% save.shadow=variables_get
    export function animateSaving(save: Sprite) {
        animation.runImageAnimation(save, [
            img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . 8 8 8 8 8 . . . . . . .
                . . . 8 . . . . . . 9 9 . . . .
                . . . . . 8 . . . . 9 . . . . .
                . . . . 8 8 . . . . . 9 . . . .
                . . . . . . . 9 9 9 9 . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `,
            img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . 9 . . . .
                . . . . 8 8 8 8 8 . 9 . 9 . . .
                . . . 8 . . . . . . . . . . . .
                . . . . . 8 . . . . . 9 . . . .
                . . . . 8 8 . . . . . 9 . . . .
                . . . . . . . 9 9 9 9 . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 9 . . . . . . . . . . . 
                . . . 9 . 9 . 8 8 8 8 8 . . . . 
                . . . . . . . . . . . . 8 . . . 
                . . . . 9 . . . . . 8 . . . . . 
                . . . . 9 . . . . . 8 8 . . . . 
                . . . . . 9 9 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
            `,
            img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 9 . . . . . . . . . . . 
                . . . 9 . 9 . 8 8 8 8 8 . . . . 
                . . . . . . . . . . . . 8 . . . 
                . . . . 9 . . . . . . . 8 . . . 
                . . . . 9 . . . . . . . . . . . 
                . . . . . 9 9 9 9 . . 8 . 8 . . 
                . . . . . . . . . . . . 8 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
            `
        ], 500, true)
    }


    // STOP SAVING
    //% group="Saving"
    //% block="stop saving %save after %time ms"
    //% save.shadow=variables_get
    //% time.shadow=timePicker
    export function stopSaving(save: Sprite, time: number) {
        pause(time)
        animation.stopAnimation(animation.AnimationTypes.All, save)
        save.destroy()
    }
}
