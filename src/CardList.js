function CardList({ robots }) {
    return (
        <div>
        {
            robots.map((user,i) => {
                return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
            })
        }
    </div>
    )
}

function Card(props) {
    const {id,name,email} = props
    return (
      <div className='br2 bg-light-green dib pa3 ma2 grow'>
        <img alt='' src={`https://robohash.org/${id}?size=200x200`}></img>
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
  
    );
  }
export default CardList;