describe('The Home Page', () => {
  beforeEach(() => {
    cy.viewport("iphone-x")
  })
  it('successfully loads', () => {
    /**
     * # 第一次定计划 11月
     */
    cy.visit('/')
    cy.contains("已存").parent().next().children().type("500")
    cy.contains("理财").parent().next().children().type("100")
    cy.contains("工资").parent().next().children().type("30")
    cy.contains("存款").parent().next().children().type("0")
    cy.contains("回国").parent().next().children().type("1")
    cy.contains("旅游").parent().next().children().type("2.5")
    cy.contains("投资").parent().next().children().type("3")
    cy.contains("房子").parent().next().children().type("9")
    cy.contains("手机").parent().next().children().type("1")
    cy.contains("吃的").parent().next().children().type("4.5")
    cy.contains("烟酒").parent().next().children().type("3")
    cy.contains("交通").parent().next().children().type("1")
    cy.contains("成长").parent().next().children().type("1.5")
    cy.contains("娱乐").parent().next().children().type("1.5")
    cy.contains("其他").parent().next().children().type("2")
    cy.contains("GO").click()

    /**
     * # 记账
     */
    //今天吃了4.5w
    cy.contains("吃的").next().click()
    cy.get(".show .four").click()
    cy.get(".show .five").click()
    cy.get(".show .zero").click()
    cy.get(".show .zero").click()
    cy.get(".show .zero").click()
    cy.get(".show .ok").click()

    //这周烟酒用了 3w
    cy.contains("这周").click()
    cy.contains("烟酒").next().click()
    cy.get(".show .three").click()
    cy.get(".show .zero").click()
    cy.get(".show .zero").click()
    cy.get(".show .zero").click()
    cy.get(".show .zero").click()
    cy.get(".show .ok").click()

    //月末付房租9w 看看还有多少钱可以冲 把钱充上
    cy.contains("这个月").click()
    cy.contains("房子").next().click()
    cy.get(".show .nine").click()
    cy.get(".show .ok").click()

    cy.contains("存款").next().click()
    cy.get(".show .five").click()
    cy.get(".show .ok").click()

    //显示还有12.5可以充
    cy.contains(" 还可以充钱 8.5 ")

    cy.contains("投资").next().click()
    cy.get(".show .eight").click()
    cy.get(".show .decimal").click()
    cy.get(".show .five").click()
    cy.get(".show .ok").click()

    //显示还有0.0可以充
    cy.contains(" 还可以充钱 0.0 ")

    //下一个月定计划 12月
    cy.contains("计划").click()
    cy.contains("new plan").click()
    cy.contains("时间").parent().next().children().type("{backspace}")
    cy.contains("时间").parent().next().children().type("2")
    cy.contains("理财").parent().next().children().type("{backspace}")
    cy.contains("理财").parent().next().children().type("{backspace}")
    cy.contains("理财").parent().next().children().type("30")
    cy.contains("GO").click()
    //去旅游了 钱从投资里出
    cy.contains("一辈子").click()
    cy.contains("旅游").next().click()
    cy.get(".show .five").click()
    cy.get(".show .ok").click()

    cy.contains("投资").next().click()
    cy.get(".show .plus").click()
    cy.get(".show .five").click()
    cy.get(".show .ok").click()

    //又下一个月定计划 1月
    cy.contains("计划").click()
    cy.contains("new plan").click()
    cy.contains("时间").parent().next().children().type("{backspace}")
    cy.contains("时间").parent().next().children().type("{backspace}")
    cy.contains("时间").parent().next().children().type("{backspace}")
    cy.contains("时间").parent().next().children().type("101")
    cy.contains("理财").parent().next().children().type("{backspace}")
    cy.contains("理财").parent().next().children().type("{backspace}")
    cy.contains("理财").parent().next().children().type("60")
    cy.contains("GO").click()

    //检查数据是否正确
    cy.contains("推移").click()
    cy.contains(" 初始").next().children().contains("600").next().contains("0.00%")
    cy.contains(" 2011").next().children().contains("635").next().contains("5.83%")
    cy.contains(" 2012").next().children().contains("665").next().contains("4.72%")
    cy.contains(" 2101").next().children().contains("665").next().contains("0.00%")

    /**
     * # 清理数据
     */
    // cy.get("h3").contains("花钱").click()

  })
})