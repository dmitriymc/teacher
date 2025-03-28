const ProfileAvatar = ({name, className}) => {
    const nameParts = name.split(" ");
    const firstName = nameParts[0] ? nameParts[0][0] : "";
    const surname = nameParts[1] ? nameParts[1][0] : "";

    return (
        <span className={className}>
            {firstName}
            {surname}
        </span>
    )
}

export default ProfileAvatar;