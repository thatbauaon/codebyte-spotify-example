export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const pathUrl = url.searchParams.get("pathUrl");

    let apiUrl = `http://localhost:3001${pathUrl}`;


    console.log('==== API URL ====', apiUrl);

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log('==== data ====', data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching data:", err);
    return new Response(JSON.stringify({ error: "Error fetching data" }), { status: 500 });
  }
}

// ✅ **เพิ่ม Method POST**
export async function POST(req: Request) {
  try {
    const body = await req.json(); // อ่านข้อมูลจาก Body
    console.log("==== Body Data ====", body);

    const url = new URL(req.url);
    const pathUrl = url.searchParams.get("pathUrl");
    const userId = url.searchParams.get("userId");

    let apiUrl = `http://localhost:3001${pathUrl}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log("==== Response Data ====", data);

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error posting data:", err);
    return new Response(JSON.stringify({ error: "Error posting data" }), { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const pathUrl = url.searchParams.get("pathUrl");

    let apiUrl = `http://localhost:3001${pathUrl}`;

    console.log('==== API URL ====', apiUrl);

    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    console.log('==== data ====', data);

    return new Response(JSON.stringify(data), {
      status: response.ok ? 200 : response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching data:", err);
    return new Response(JSON.stringify({ error: "Error fetching data" }), { status: 500 });
  }
}