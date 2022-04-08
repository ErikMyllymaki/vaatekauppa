import React from 'react'

export default function AddCategories() {
  return (
    <>
      <form>
        <h4>Lisää kategoria</h4>
        <label htmlFor="categoryName">Kategorianimi</label>
        <input type="text" name="categoryName" id="categoryName"></input>
        <input type="submit" className="btn btn-primary" value="Lisää kategoria"></input>
      </form>
    </>
  )
}
