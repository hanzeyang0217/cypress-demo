describe('The Home Page', () => {
  beforeEach(() => {
    // cy.viewport("iphone-x")
  })
  it('successfully loads', () => {
    cy.visit('#/doc')
    //大屏幕的时候 有菜单 有列表
    cy.contains("菜单1")
    cy.contains("组件列表")

    //小屏幕的时候 没有菜单 没列表 有汉堡包
    cy.visit('#/doc')
    cy.viewport("iphone-x")
    cy.reload()
    cy.contains('汉堡').click()
    cy.contains("组件列表")
  })
})