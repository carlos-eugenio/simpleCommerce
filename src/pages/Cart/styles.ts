import styled from 'styled-components/native';
import {FlatList} from 'react-native';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  category_id: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 0 10px;
  padding-bottom: 60px;
`;

export const ProductList = styled(
  FlatList as new () => FlatList<Product>,
).attrs({
  numColumns: 2,
})`
  flex: 1;
`;

export const Product = styled.TouchableOpacity`
  background: #000;
  border-radius: 10px;
  flex: 1;
  margin: 10px;
`;

export const ProductImage = styled.ImageBackground`
  border-radius: 10px;
  height: 241px;
  width: 100%;
  overflow: hidden;
  align-self: center;
`;

export const BackgroundImageDarken = styled.View`
  width: 100%;
  height: 100%;
  background-color: 'rgba(0,0,0, 0.40)';
`;

export const ProductDetailsContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ProductTitle = styled.Text`
  flex-direction: row;
  align-self: flex-start;
  padding: 15px 20px 0px 20px;
  color: #fff;
  font-family: 'RobotoCondensed-Regular';
  font-size: 18px;
`;

export const ProductPrice = styled.Text`
  flex-direction: row;
  align-self: flex-start;
  padding: 5px 20px 0px 20px;
  color: #fff;
  font-family: 'RobotoCondensed-Regular';
  font-size: 18px;
`;

export const ProductColor = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  margin: 60px 0 0 20px;
`;

export const ProductQuantityContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px 20px 0 20px;
`;

export const ProductQuantity = styled.Text`
  color: #fff;
  font-family: 'RobotoCondensed-Regular';
  font-size: 20px;
  padding: 0 5px 0 5px;
  line-height: 25px;
`;

export const ButtonQuantity = styled.TouchableOpacity``;
