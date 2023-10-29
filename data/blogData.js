export let blogData = [];

export async function getBlogData() {
  try {
    const response = await fetch("http://localhost:3002/datablog");
    if (!response.ok) {
      throw new Error(
        "Verilere erişim başarısız: HTTP Hatası " + response.status
      );
    }
    const data = await response.json();
    blogData = data;
    // console.log("Veriler başarıyla alındı:", blogData);
    return blogData;
  } catch (error) {
    console.error("Veri alma hatası:", error.message);
    throw error; // Hatanın yönetimini üst seviyede yapmak için hatayı yeniden fırlatın.
  }
}
