import React, {useState, useRef, useEffect} from "react";

interface IHandleOnClickLi {
    index: number;
    value: string;
}

interface INavigationProps {
    navScreen: string;
    setNavScreen: (value: string) => void;
}

const navigation = [
    { name: "Introduction", value: "introduction" },
    { name: "Team", value: "team" },
    { name: "Deck and Video", value: "deck_and_video" },
    { name: "Statistics", value: "statistics" },
    { name: "FAQ's", value: "faqs" },
    { name: "Investors", value: "investors" }
]

const Navigation = ({navScreen, setNavScreen}: INavigationProps) => {
    const liClassName: string = "mr-4 cursor-pointer px-2 py-3 select-none whitespace-nowrap"

    const firstLiRef = useRef<HTMLLIElement>();
    const lastLiRef = useRef<HTMLLIElement>();

    const [linePosition, setLinePosition] = useState({
        width: 0,
        left: 0
    })

    const [minWidthLine, setMinWidthLine] = useState<number>(0);

    useEffect(() => {
        const getBounding = firstLiRef.current.getBoundingClientRect();
        const getBoundingLastLi = lastLiRef.current.getBoundingClientRect();

        setLinePosition((prev) => (
            {
                ...prev,
                width: getBounding.width,
                left: 0
            }
        ))

        setMinWidthLine(getBoundingLastLi.right - getBounding.left);
    }, [])

    const handleOnClickLi = (e: any, {index, value}: IHandleOnClickLi) => {
        if (navScreen === value) return;

        const element = e.target;

        const getBoundingLeftFirstLi = firstLiRef.current.getBoundingClientRect().left;
        const getBounding = element.getBoundingClientRect();


        setLinePosition((prev) => (
            {
                ...prev,
                width: getBounding.width,
                left: getBounding.left - getBoundingLeftFirstLi
            }
        ))

        setNavScreen(value);

    }

    return (
        <nav className="overflow-y-hidden overflow-x-auto pb-3">
            <ul className="flex flex-nowrap">
                {
                    navigation.map((nav, index) => {
                        if (index === 0 || index === navigation.length - 1) {
                            return (
                                <li className={liClassName} ref={index === 0 ? firstLiRef : lastLiRef} key={index} onClick={(e) => handleOnClickLi(e, { index, value: nav.value })}>
                                    <a href={`#${nav.value}`}>
                                        {nav.name}
                                    </a>
                                </li>
                            )
                        }

                        return (
                            <li className={liClassName} key={index} onClick={(e) => handleOnClickLi(e, { index, value: nav.value })}>
                                <a href={`#${nav.value}`}>
                                    {nav.name}
                                </a>
                            </li>
                        )
                    })
                }
                
            </ul>

            <div className="h-hr bg-gray-200 relative w-full" style={{
                minWidth: `${minWidthLine}px`
            }}>
                <div className="h-full bg-green-500 absolute transition-all" style={{
                    left: `${linePosition.left}px`,
                    width: `${linePosition.width}px`
                }}></div>
            </div>

        </nav>
    )
};

export default Navigation;