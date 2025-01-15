type Props ={
    size?:"sm"|"xs"|"lg"|"xl";
    color?:"white" | "orange";
    className?: string;
}

const Loading : React.FC<Props> = props => {
    return (
        <span
            className={`w-5 h-5 border-2 rounded-full inline-block animate-spin ${props.color === "white" ? "border-white" : props.color === "orange" ? "border-orange-400" : "border-neutral-300"} border-t-transparent border-l-transparent ${props.className||""}`}
        />
    )
}
export default Loading;