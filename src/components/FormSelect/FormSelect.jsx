import React, { useState } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import { genres } from '../../utils/constants'
import styles from './FormSelect.scss'

export const FormSelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropStyle = className(styles.dropdown, { [styles.visible]: isOpen })
  const arrowStyle = className(styles.arrow, { [styles.open]: isOpen })
  const valueStyle = className(styles.value, { [styles.default_value]: !value })
  return (
    <>
      <span>GENRE</span>
      <div className={styles.container}>
        <div onClick={() => setIsOpen((state) => !state)} className={styles.select}>
          <p className={valueStyle}>{value || 'Select genre'}</p>
          <div className={arrowStyle}>&#9660;</div>
        </div>
        <div className={dropStyle}>
          {genres.map((genre) => (
            <div key={genre} className={styles.input}>
              <input
                className={styles.checkbox}
                id={genre}
                type="checkbox"
                checked={value.split(', ').includes(genre)}
                value={genre}
                onChange={onChange}
              />
              <label className={styles.lable} htmlFor={genre}>
                <span>{genre}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

FormSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}