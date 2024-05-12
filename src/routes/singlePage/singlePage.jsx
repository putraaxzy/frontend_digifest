import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";
import { useParams } from "react-router-dom";

function SinglePage() {
  let { ids } = useParams();
  let dataDetail = singlePostData.find(({ id }) => id == ids);
  let userDetail = userData.find(({ id }) => id == ids);
  console.log(dataDetail);
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={dataDetail.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{dataDetail.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{dataDetail.address}</span>
                </div>
                <div className="price">{dataDetail.price}</div>
              </div>
              <div className="user">
                <img src={userDetail.img} alt="" />
                <span>{userDetail.name}</span>
              </div>
            </div>
            <div className="bottom">{dataDetail.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Informasi Lebih Lanjut</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/usr.png" alt="" />
              <span>39k santri</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Sekolah</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Terminal Bus</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Lokasi</p>
          <div className="mapContainer">
            <Map items={[dataDetail]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Kirim Pesan
            </button>
            <button>
              <img src="/save.png" alt="" />
              Simpan Ke List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
