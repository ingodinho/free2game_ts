type Props = {
    width?: number;
    height?: number;
}

const Lens = ({width = 24, height=30} : Props) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon/Search">
                <path id="Line 5" d="M22.2928 26.7071C22.6833 27.0976 23.3165 27.0976 23.707 26.7071C24.0975 26.3166 24.0975 25.6834 23.707 25.2929L22.2928 26.7071ZM14.1847 18.5991L22.2928 26.7071L23.707 25.2929L15.599 17.1849L14.1847 18.5991Z" fill="white"/>
                <circle id="Ellipse 2" cx="9" cy="12" r="8" stroke="white" strokeWidth="2"/>
            </g>
        </svg>
    )
}

export default Lens;
