// import React from 'react'

export default function Header() {
    const currentDate = new Date().toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).replace(/(\w+)\s(\d+)/, (_match, month, day) => `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}`);

  return (
    <div>
      <h1>Header</h1>
      <p>{currentDate}</p>
    </div>
  )
}