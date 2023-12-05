export function kolynScreen(screenBackground: string) {
    return {
        flex: 1,
        padding: 24,
        backgroundColor: screenBackground,
    }
}

export function kolynInputfield(background: string, font: string) {
    return {
        margin: 12,
        backgroundColor: background,
        padding: 10,
        borderRadius: 10,
        fontFamily: font,
        alignSelf: 'center',
    };
}

export function kolynButton(buttonBackground: string) {
    return {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 1,
        paddingHorizontal: 1,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: buttonBackground,
        alignSelf: 'center',
    };
}

export function kolynLabel(fontSize: number, font: string, fontColor: string) {
    return {
        fontSize: fontSize,
        fontFamily: font,
        color: fontColor,
    };
}
