Feature: Card

  Scenario Outline: Validate add card
    Given I'm at home
    When Search for a product "<nameProduct>"
    And Click Product
    And Click add card
    Then Product be cart "<nameProduct>"

    Examples:
      | nameProduct                   |
      | HP USB 3 Button Optical Mouse |

  Scenario Outline: Validate many products
    Given I'm at home
    When Add many products:
      | productName                                    |
      | HP Chromebook 14 G1(ENERGY STAR)               |
      | HP USB 3 Button Optical Mouse                  |
      | BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES |
    Then Displays products in cart:
      | productName                                    |
      | BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES |
      | HP USB 3 Button Optical Mouse                  |
      | HP Chromebook 14 G1(ENERGY STAR)               |

    Examples:
      | nameProduct                   |
      | HP USB 3 Button Optical Mouse |
