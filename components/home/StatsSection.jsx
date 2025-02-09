import React from 'react'
import Stat from './Stat'
import BloodBackground from '../common/BloodBackground'

function StatsSection({ dictionary, lang }) {
  return (
    <>

        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center gap-4 py-4">
          <div>
            <Stat
              type="M"
              dictionary={dictionary}
              lang={lang}
            />
          </div>
          <div>
            <Stat
              type="I"
              dictionary={dictionary}
              lang={lang}
            />
          </div>
        </div>
    </>
  )
}

export default StatsSection