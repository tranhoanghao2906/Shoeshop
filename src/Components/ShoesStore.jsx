import React from 'react'

const ShoesStore = () => {
  return (
    <ShoesStore>
    <ProductList productsData={products} setStateModal={this.setStateModal}>
    <ProductItem item={product} setStateModal={this.props.setStateModal} />
    </ProductList>
    <Modal content={this.state.productDetail} />
    </ShoesStore>
  )
}

export default ShoesStore