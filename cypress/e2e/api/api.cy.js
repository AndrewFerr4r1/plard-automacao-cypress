describe('template spec', () => {

  it('get product', () => {
    cy.request({
      method: 'GET',
      url: 'www.advantageonlineshopping.com/catalog/api/v1/products/search?name=HP Chromebook 14 G1(ENERGY STAR)',
      failOnStatusCode: false
    }).as('getProductResult')

    cy.get('@getProductResult').then((res) => {
      // console.log("RESPONSE: ", res.body[0].categoryId);
      // console.log("categoria: ", res.body.categoryId);
      expect(res.status).equal(200);
      expect(res.body[0].categoryId).equal(1);
      expect(res.body[0].categoryName).equal("LAPTOPS");
      expect(res.body[0].categoryImageId).equal("laptops");
      expect(res.body[0].products[0].productId).equal(9);
      expect(res.body[0].products[0].categoryId).equal(1);
      expect(res.body[0].products[0].productName).equal("HP Chromebook 14 G1(ENERGY STAR)");
      expect(res.body[0].products[0].price).equal(299.99);
      expect(res.body[0].products[0].imageUrl).equal("1249");
    })
  })

  const bodyLogin = 
    {
      "email": "ferrariandrewfut@gmail.com",
      "loginPassword": "TesteAndrew2",
      "loginUser": "AndrewAdmin"
    }

    var token;
  

  it('post product', () => {
    cy.request({
      method: 'POST',
      body: bodyLogin,
      url: 'www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
      failOnStatusCode: false
    }).as('loginSucessful')

    cy.get('@loginSucessful').then((res) => {
      console.log(res);
      expect(res.status).equal(200);
      token = res.body.statusMessage.token
      console.log("TOKEN: ", token);
    })

    const fileName = 'teste.jpg'; 

    cy.fixture(fileName, 'base64').then(fileContent => {
      const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
      const formData = new FormData();
      formData.append('file', blob, fileName);

      cy.request({
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData,
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/922320644/Roboto/%2333363D?product_id=9',
        failOnStatusCode: false
      }).as('postProduct')

    

      cy.get('@postProduct').then((res) => {
        console.log("RESSSS0", res)
        expect(res.status).equal(200);
      })

      cy.request({
        method: 'GET',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/9',
        failOnStatusCode: false
      }).as('validProduct')
  
      cy.get('@validProduct').then((res) => {
        console.log("VALID PRODUCT", res.body.images[0]);
        expect(res.status).equal(200);
        expect(res.body.images[0]).equal("#33363D##custom_image_Roboto_0c2dd458-e2ed-4631-8ab5-317afbe914ee");
      })

    })
  })
})