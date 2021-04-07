import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { Title, AddressBox } from './styles';

const ListAddress: React.FC = () => {
  const [addresses, setAddress] = useState([]);
  // const id = 1;

  useEffect(() => {
    api.get(`user`).then((response) => setAddress(response.data));
  }, []);
  return (
    <>
      <Title>Usuários e Endereços</Title>

      <AddressBox>
        <ul>
          {addresses.map((address: any) => (
            <li key={address.id}>
              <b>Nome:</b>
              {address.name}
              <ul>
                <li>
                  <b>Email:</b>
                  {address.email}
                </li>
                <li>
                  <b>Endereço:</b>
                  {address.email}, {address.number}. {address.district},{' '}
                  {address.city}, {address.state}, {address.country}{' '}
                </li>
                <li>
                  <b>CEP:</b>
                  {address.cep}
                </li>
                <li />
              </ul>
            </li>
          ))}
        </ul>
      </AddressBox>
    </>
  );
};

export default ListAddress;
