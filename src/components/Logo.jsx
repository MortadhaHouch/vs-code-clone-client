/* eslint-disable react/prop-types */
export default function Logo(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width={props.size||50} height={props.size||50}>
            <defs>
                <linearGradient id="linear-gradient" x1="63.466" y1="466.774" x2="448.534" y2="81.707" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#41dfd0"/>
                    <stop offset="1" stopColor="#ee83ef"/>
                </linearGradient>
            </defs>
            <g id="solid_gradient" data-name="solid gradient">
                <path d="M400,208H112V352H400ZM210.343,325.657l-48-48a8,8,0,0,1,.536-11.8l48-40,10.242,12.292-41.269,34.392,41.805,41.805Zm45.176-2.923-15.038-5.468,32-88,15.038,5.468Zm102.138-45.077-48,48-11.314-11.314,41.805-41.805-41.269-34.392,10.242-12.292,48,40a8,8,0,0,1,.536,11.8ZM64,400H48V98a2,2,0,0,1,2-2H462a2,2,0,0,1,2,2V400H448V120a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8ZM400,192H112V176H400ZM208,400a7.994,7.994,0,0,1,3.578.845L225.889,408h60.222l14.311-7.155A7.994,7.994,0,0,1,304,400H432V128H80V400ZM96,168a8,8,0,0,1,8-8H408a8,8,0,0,1,8,8V360a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8ZM480,416v16a8.009,8.009,0,0,1-8,8H40a8.009,8.009,0,0,1-8-8V416H206.111l14.311,7.155A7.994,7.994,0,0,0,224,424h64a7.994,7.994,0,0,0,3.578-.845L305.889,416Z" style={{fill:"url(#linear-gradient)"}}/>
            </g>
        </svg>
    )
}
