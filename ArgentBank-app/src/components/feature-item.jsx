import PropTypes from "prop-types";

function FeatureItem({ title, image, description }) {
    return (
        <div className="feature-item">
            <img src={image} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p className="feature-item-description">{description}</p>
        </div>
    );
}
export default FeatureItem;

FeatureItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};