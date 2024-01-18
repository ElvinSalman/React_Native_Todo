import Svg, { G, Path } from "react-native-svg"

export const backSvg = (
    <Svg
        fill="white"
        height="30px"
        width="30px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 206.108 206.108"
        xmlSpace="preserve"
    //   {...props}
    >
        <Path d="M152.774 69.886H30.728l24.97-24.97a9 9 0 000-12.728 9 9 0 00-12.729 0L2.636 72.523a9 9 0 000 12.728l40.333 40.333a8.97 8.97 0 006.364 2.636 9 9 0 006.364-15.364l-24.97-24.97h122.046c19.483 0 35.334 15.851 35.334 35.334s-15.851 35.334-35.334 35.334H78.531c-4.971 0-9 4.029-9 9s4.029 9 9 9h74.242c29.408 0 53.334-23.926 53.334-53.334s-23.925-53.334-53.333-53.334z" />
    </Svg>
)

export const trashSvg = (
    <Svg
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        width="30px"
    >
        <Path
            d="M12 10v7m-4-7v7m11-8h3m-3 5h3m-3 5h2M16 6v10.2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C13.72 21 12.88 21 11.2 21H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C4 18.72 4 17.88 4 16.2V6M2 6h16m-4 0l-.27-.812c-.263-.787-.394-1.18-.637-1.471a2 2 0 00-.803-.578C11.938 3 11.524 3 10.694 3H9.306c-.829 0-1.244 0-1.596.139a2 2 0 00-.803.578c-.243.29-.374.684-.636 1.471L6 6"
            stroke="#000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export const addSvg = (
    <Svg
        viewBox="0 0 24 24"
        fill="white"
        height="30px"
        width="30px"
        xmlns="http://www.w3.org/2000/svg"
    >
        <G stroke="#1C274C" strokeWidth={1.5} strokeLinecap="round">
            <Path d="M15 12h-3m0 0H9m3 0V9m0 3v3M7 3.338A9.954 9.954 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
        </G>
    </Svg>
)

export const editSvg = (
    <Svg
        viewBox="0 0 24 24"
        fill="white"
        height="30px"
        width="30px"
        xmlns="http://www.w3.org/2000/svg"
    >
        <G
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M20.15 7.94L8.28 19.81c-1.06 1.07-4.23 1.56-5 .85-.77-.71-.21-3.88.85-4.95L16 3.84a2.9 2.9 0 014.1 4.1h.05zM21 21h-9" />
        </G>
    </Svg>
)