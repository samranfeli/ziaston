type Props = {
    className?: string;
}
const Menu : React.FC<Props> = props => {
    return(
        <svg viewBox="0 -960 960 960" className={props.className || "fill-current w-7 h-7"}>
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
    )
}
export default Menu;