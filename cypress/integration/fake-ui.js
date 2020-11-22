describe('The Home Page', () => {
  beforeEach(() => {
    // cy.viewport("iphone-x")
  })
  it('successfully loads', () => {
    cy.visit('#/doc')
    //大屏幕的时候 有菜单 有列表
    cy.contains("菜单1")
    cy.contains("组件列表")
    cy.contains("主文档")
    cy.contains("Switch的文档").should('not.be.visible')
    //点边栏不消失出内容
    cy.contains("Switch 组件").click()
    cy.contains("Button 组件")
    cy.contains("Switch 的文档")


    //小屏幕的时候 没有菜单 没列表 有汉堡包
    cy.visit('#/doc')
    cy.viewport("iphone-x")
    cy.reload()

    cy.contains("菜单1").should('not.be.visible')
    cy.contains("组件列表").should('not.be.visible')
    cy.contains("主文档")
    cy.contains('汉堡').click()
    cy.contains("组件列表")
    //点边栏 消失 出内容
    cy.contains("Switch 组件").click()
    cy.contains("Switch 组件").should('not.be.visible')
    cy.contains("Switch 的文档")
  })
})