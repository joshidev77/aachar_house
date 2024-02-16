import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();

    return <footer>{`Copyright © acchar house ${year}`}</footer>;
}

export default Footer