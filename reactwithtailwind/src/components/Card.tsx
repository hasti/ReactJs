interface CardProps {
    name: string;
    description: string;
    imageUrl: string;
}
const Card = ({ name , description, imageUrl} : CardProps) => {
    return (
        <div
            className="flex flex-col rounded-xl  p-4"
            style={{
                border: "0.88px solid",

                backdropFilter: "saturate(180%) blur(14px)",
                background: " #ffffff0d",
            }}
        >
            <div>
                <img
                    src={imageUrl}
                    alt="Profile Pic"
                    width="400"
                    height="400"
                    className="rounded-xl"
                />
            </div>
            <div className="flex flex-col  rounded-b-xl py-4 ">
                <div className="flex justify-between">
                    <h1 className="font-RubikBold ">{name}</h1>
                </div>
                <div className="flex  justify-between font-mono">
                    <p>{ description }</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
