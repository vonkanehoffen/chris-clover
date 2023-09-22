import { Quote } from "./quote";

export default function Biography() {
  return (
    <div className="mx-8 text-lg">
      <h1 className="text-3xl my-8">Biography</h1>
      <p className="my-8">
        Chris Clover is one of the very few contemporary artists working today
        to have entered the profession via the time honoured route as an
        &apos;apprentice artist&apos;. In the 1960s at the age of 15, he was
        indentured to an art studio in the centre of Manchester. He later became
        a Trade Master with that same company before leaving to set up his own
        studio 10 years later (again in the centre of Manchester). Here he has
        worked on commissions for such high profile companies as the BBC, Rolls
        Royce, Granada TV, Wellcome Foundation, ICI etc....Most recently his
        work has been published by Wizard &amp; Genius of Switzerland.
      </p>
      <p className="my-8">
        Chris has always earned his living as an artist and believes that
        freedom from the influences of a conventional academic training, has
        benefitted his work. However, although he never went through art college
        as a student, he was invited to teach as a &apos;guest lecturer&apos; by
        Manchester&apos;s College of Art &amp; Design. He taught there on a
        regular basis for a few years until pressure of work made it impossible
        for him to continue.
      </p>
      <p className="my-8">
        Chris&apos;s rare one man shows have always been well attended, in fact
        his popularity was such, that during a 5 week show at Salford City Art
        Gallery, he broke the attendance record (previously held by the Salford
        artist, Harold Riley) - a record that I believe still stands to this
        day. After one of his exhibitions in city centre, a painting was chosen
        by the Manchester City Art Gallery to join their Rutherston Collection.
      </p>
      <Quote
        content="The originality of Chris's work speaks for itself. His
        extraordinary imagination conjures up fascinating images that povide a
        feast for the eyes, and all those who to take the time to study his work
        are promised a stimulating and rewarding experience."
        author="Alan Royle - Artist."
        date=""
      />
      <Quote
        content="This is undoubtedly serious and imaginative art, relating to a
          kind of imagery that stretches between 'science fiction art'
          and 'classic surrealism', I've viewed it with great
          pleasure."
        author="George Melly (Musician, Author, and Art Critic)"
        date="February 1997"
      />
      <Quote
        content="Chris's groundbreaking work, reflects a world of awe inspiring
          detail. He's simply one of the most extraordinary and exiting artists
          around."
        author="Ro Barrat (Manchester Evening News)"
        date="May 2000"
      />
      <Quote
        content={
          <>
            <span className="block mb-4">
              Cultural historian CP Lee, who played at the Magic Village often
              with his cult sixties&apos; band Greasy Bair said &quot;All the
              hip youngsters had followed Roger Eagle at the Twisted Wheel but
              as the scene started what we called the underground.
            </span>
            <span className="block mb-4">
              In 1968 Roger took over the Jigsaw - and, to lovingly quote Frank
              Zappa, changed it into a psychedelic dungeon.
            </span>
            <span className="block mb-4">
              He got in Chris Clover, an amazing artist... you entered on the
              grount floor, and went down the stairs with all these psychedelic
              paintings that were mindblowing.
            </span>
            <span className="block mb-4">
              It encouraged poetry and dance and all sorts of other things to
              serve the hippie community, which was perhaps a few hundred
              people.
            </span>
            <span className="block mb-4">
              The stage of the Magic Village would grace stars including Pink
              Ffloyd, Fleetwood Mac, Fairport Convention, Marc Bolan and David
              Bowie, who played an acoustic set the night before his show at the
              Free Trade Hall.
            </span>
          </>
        }
        author="Chris Osuh (Manchester Evening News)"
        date="June 2018"
      />
    </div>
  );
}
