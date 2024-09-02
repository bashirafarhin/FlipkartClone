import { Box, InputBase, List, ListItem, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { useNavigate } from 'react-router-dom';

const BoxStyle = styled(Box)`
 background : #fff;
 width : 38%;
 border-radius : 2px;
 margin-left : 10px;
 display : flex;
`
const InputBaseStyle = styled(InputBase)`
 padding : 2px;
 width : 100%;
 font-size : unset;
`
const BoxStyleSearch = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;

`
const ListStyle = styled(List)`
 position : absolute;
 background : #FFFFFF;
 color : #000;
 margin-top: 36px;
`

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const Search = () => {
    const [ text, setText ] = useState('');
    const navigate = useNavigate();

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch]);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleNavigation = (id) => {
        setText('');
        navigate(`product/${id}`);
    }

    return (
        <BoxStyle>
            <InputBaseStyle
            inputProps={{ 'aria-label': 'search' }}
            placeholder="Search for products, brands and more"
            onChange={handleChange}
            value={text || ''}
            style={{cursor : "pointer"}}
            />
            <BoxStyleSearch>
                <SearchIcon/>
            </BoxStyleSearch>
            {
                text &&
                <ListStyle>
                    {
                        products.filter((product) => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                           <ListItem style={{cursor : "pointer"}} key={product.id} onClick={() => handleNavigation(product.id)}>
                            {product.title.longTitle}
                           </ListItem> 
                        ))
                    }
                </ListStyle>
            }
        </BoxStyle>
    )
}

export default Search;