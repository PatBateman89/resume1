require 'test_helper'

class StuffControllerTest < ActionDispatch::IntegrationTest
  test "should get things" do
    get stuff_things_url
    assert_response :success
  end

end
