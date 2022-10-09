
export const Modal = ({ show, onClose }) => {

    const {name, email, phone, isShow} = show

    const onCloseData = () => {
        onClose(false)
    }

    return (
        <>
            {
                isShow
                    ? <div className="wrapper">
                        <div className="window">
                            <h1>{name}</h1>
                            <p>
                                {email}
                            </p>
                            <p>
                                {phone}
                            </p>
                            <button onClick={onCloseData}>close</button>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}

