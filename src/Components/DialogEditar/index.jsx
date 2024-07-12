

const DialogEditar = ({ dialogRef }) => {
    return (
        <dialog ref={dialogRef}>
            <h1>Total</h1>
            <h2>Zueira</h2>
            <button onClick={() => dialogRef.current.close()}>Fecha</button>
        </dialog>
    )
}

export default DialogEditar;