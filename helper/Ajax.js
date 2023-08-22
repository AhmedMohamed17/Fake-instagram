async function GetData(fun) {
  try {
    let response = await fetch("../data/users.json");

    let data = await response.json();
    fun(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
export default GetData;
