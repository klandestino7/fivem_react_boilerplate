
interface DividerProps {
    vertical?: boolean;
}

export const Divider = ({ vertical = false } : DividerProps) => {
    return (
        <div
            className={`${vertical ? "h-full" : "w-full"} py-2 px-4`}
            style={{
                background: `url(src/assets/img/divider${ vertical ? "_vertical" : ""}.png)`,
                backgroundSize: vertical ? "auto 100%" : "100% auto",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat"
            }}
        />
    )
}