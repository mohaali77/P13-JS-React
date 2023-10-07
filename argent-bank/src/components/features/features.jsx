export default function Features({ image, title, description }) {
    return <>
        <div class="feature-item">
            <img src={image} alt="" className="feature-icon" />
            <h3 class="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    </>
}