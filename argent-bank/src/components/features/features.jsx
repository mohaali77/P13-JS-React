export default function Features({ image, title, description }) {
    return <>
        <div className="feature-item">
            <img src={image} alt="" classNameName="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    </>
}