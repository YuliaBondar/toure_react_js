import React from 'react'
import './Partners.css'
import {list_partners} from './list.js'

const Partners = () => {
  return (
    <div className='partners'>
      <div className="partners_all">
          <div className="text_partners">OUR PARTNERS</div>
          <div className="all_parnerse_emmblem">
            {list_partners.map(list_partners => 
              <div key={list_partners.id} className="emblemm">
                  <div className="pages">
                    <img src={list_partners.emblem} alt='emblem' title={list_partners.title}/>

                  </div>
                  <div className="name_emblem">
                    <p>{list_partners.name}</p>
                  </div>
              </div>
            )}
          </div>
          
      </div>
    </div>
  )
}

export default Partners