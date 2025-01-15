import Link from "next/link";
import React, { Fragment } from "react";

type Props = {
    items: {
        label: string;
        link?: string;
    }[];
    hideHome?: boolean;
}

const BreadCrumpt: React.FC<Props> = props => {

    const linksClassName = "text-neutral-400 hover:text-neutral-800 transition-all"
    return (
        <div className="flex flex-wrap items-center gap-2 text-sm mb-4 ">
            {!props.hideHome && <Fragment>
                <Link href="/" className={`${linksClassName}`} aria-label="home">
                    خانه
                </Link>
                <span className="text-neutral-400"> / </span>
            </Fragment>}
            {props.items.map((item, index) => (
                <Fragment key={item.label}>
                    {!!index && <span className="text-neutral-400"> / </span>}
                    {item.link ? (
                        <Link href={item.link} className={linksClassName}> {item.label} </Link>
                    ) : (
                        <span className="text-neutral-800"> {item.label} </span>
                    )}
                </Fragment>
            ))}

        </div>
    )
}

export default BreadCrumpt;