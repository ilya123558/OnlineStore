const findToasting = (rating) => {
    const mas = []
    for (let i = 0; i < rating; i++) {
        mas.push(
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.567249 10.9886C-0.681333 8.78725 0.168296 5.33468 2.75128 2.75151C5.68453 -0.180742 9.74037 -0.879804 11.8111 1.19015C11.8136 1.19286 11.8156 1.19593 11.8189 1.19868C11.4045 2.40419 10.0847 4.96918 6.1287 6.35594C2.50479 7.62696 1.10686 9.64771 0.567249 10.9886ZM12.3936 1.94371C12.0797 2.67579 11.5334 3.6325 10.5921 4.5735C9.64598 5.51984 8.30125 6.44928 6.39649 7.11728C2.53063 8.47262 1.4505 10.6914 1.14913 11.7666C1.16337 11.781 1.17561 11.7958 1.18945 11.8098C3.26002 13.8798 7.31603 13.1808 10.2491 10.2481C12.8589 7.63872 13.6983 4.14138 12.3936 1.94371Z" fill="#505050" />
            </svg>

        )
    }
    for (let j = mas.length; j < 5; j++) {
        mas.push(
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.567249 10.9886C-0.681333 8.78725 0.168296 5.33468 2.75128 2.75151C5.68453 -0.180742 9.74037 -0.879804 11.8111 1.19015C11.8136 1.19286 11.8156 1.19593 11.8189 1.19868C11.4045 2.40419 10.0847 4.96918 6.1287 6.35594C2.50479 7.62696 1.10686 9.64771 0.567249 10.9886ZM12.3936 1.94371C12.0797 2.67579 11.5334 3.6325 10.5921 4.5735C9.64598 5.51984 8.30125 6.44928 6.39649 7.11728C2.53063 8.47262 1.4505 10.6914 1.14913 11.7666C1.16337 11.781 1.17561 11.7958 1.18945 11.8098C3.26002 13.8798 7.31603 13.1808 10.2491 10.2481C12.8589 7.63872 13.6983 4.14138 12.3936 1.94371Z" fill="transparent" />
            </svg>

        )
    }

    return mas
}

export default findToasting