#[macro_use] extern crate rocket;
use rocket::fs::NamedFile;
use rocket::fs::FileServer;

#[derive(Debug)]
pub struct EmptyContext {

}

#[get("/")]
async fn index() -> Result<NamedFile, std::io::Error> {
    NamedFile::open("../HTML/index.html").await
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", FileServer::from("../HTML"))
        .mount("/", routes![index])
}
