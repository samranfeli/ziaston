type Props = {
    className?: string;
}
const Telegram: React.FC<Props> = props => {
    return (
        <svg viewBox="0 0 343 346" className={props.className || "fill-current w-7 h-7"}>
            <path d="M172.5,339C81.4,338.7,7.7,264.5,8,173.5C8.3,82.4,82.5,8.7,173.5,9C264.6,9.3,338.3,83.5,338,174.5
								C337.6,265.6,263.5,339.3,172.5,339z M173.1,39C98.5,39,38,99.5,38,174c0,74.3,60.3,134.8,134.6,135
								c74.5,0.2,135.2-60.2,135.3-134.8C308.1,99.7,247.6,39.1,173.1,39z" />
            <path d="M248.9,122.3c-1.8,12.5-3.7,27.1-6,41.8c-3.8,24.2-7.8,48.3-12,72.4c-0.8,4.8-2.9,9.5-4.8,14.1c-2,4.9-6.1,6.7-11,5.1
								c-4.1-1.3-8.2-2.9-11.8-5.2c-15.9-10.4-31.6-21-47.3-31.7c-8.8-5.9-9.3-12-1.7-19.5c15.6-15.3,31.2-30.5,46.8-45.8
								c1.1-1,2.4-2,3-3.3c0.5-1.2,0.8-3.2,0.1-4c-0.6-0.7-2.6-0.6-3.9-0.3c-1.2,0.3-2.2,1.4-3.3,2.1c-22.5,15.2-45,30.4-67.5,45.5
								c-6.7,4.5-14.2,5.9-22,3.8c-9.8-2.6-19.5-5.5-29.1-8.9c-2.6-0.9-6.2-3.9-6.2-5.9c0-2.6,2.7-6.3,5.2-7.4
								c12.4-5.9,25.1-11.4,37.9-16.7c36.3-15.3,72.6-30.6,109-45.7c4.2-1.8,8.9-3.1,13.4-3.6C245.4,108.3,249.2,112.3,248.9,122.3z" />
        </svg>
    )
}
export default Telegram;