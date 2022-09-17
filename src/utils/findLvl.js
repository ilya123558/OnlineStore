const findLvl = (rating) => {
    const mas = []
    for (let i = 0; i < rating; i++) {
        mas.push(
            <svg key={i} width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="3.5" cy="3.4978" rx="3.5" ry="3.4978" fill="#F9B300" />
            </svg>

        )
    }
    for (let j = mas.length; j < 10; j++) {
        mas.push(
            <svg key={j} width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="3.5" cy="3.4978" rx="3.5" ry="3.4978" fill="#F0F0F0" />
            </svg>
        )
    }

    return mas
}

export default findLvl