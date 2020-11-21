import React from 'react'
import 'antd/dist/antd.css'
import { Table } from 'antd';
import { useSelector } from 'react-redux';



const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Título',
      dataIndex: 'titulo',
      key: 'titulo',
    },
    {
      title: 'País',
      dataIndex: 'pais',
      key: 'pais'
    },
    {
      title: 'Tema',
      dataIndex: 'tema',
      key: 'tema'
    }
]

export const InfoPonentes = () => {

  const {speakers} = useSelector( state => state.speaker );

  const data= speakers.map( speaker =>(
    {
      key: speaker.id,
      nombre: speaker.name,
      titulo: speaker.title,
      pais: speaker.country,
      tema: speaker.topic
    }
  ))

  return (
      <>
          <div className="bs-example widget-shadow">
              <div className="card">
                  <div className="card-header">
                      <h2 className="text-secundary title1">Ponentes:</h2>
                  
                  </div>
                  <div className="card-body">
                      <Table 
                          columns={columns} 
                          dataSource={data} 
                          pagination={ {pageSize: 4} }
                      />
                  </div>
              </div>
          </div>
      </>
  )
}
