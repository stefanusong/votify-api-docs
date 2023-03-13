import styles from "./Badge.module.css";

function Badge({ txt, color }) {
    return (
        <div className={`${styles.defaultBadge} ${getStyleByColor(color)}`}>
            <p>{txt}</p>
        </div>
    );
}

function getStyleByColor(color) {
    if (!color || color.toLowerCase() == "blue") {
        return styles.blueBadge
    }

    if (color.toLowerCase() == "green") {
        return styles.greenBadge
    }

    if (color.toLowerCase() == "orange") {
        return styles.orangeBadge
    }

    if (color.toLowerCase() == "red") {
        return styles.redBadge
    }

    return styles.blueBadge
}

export default Badge