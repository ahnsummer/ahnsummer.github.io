const Resume = () => {
  return (
    <div className="w-full flex justify-center pt-[108px] pb-8 bg-primary">
      <div className="container flex flex-col px-4 md:px-0">
        {/* first line */}
        <div className="w-full flex-center py-8">
          <div className="w-1/3 text-left">
            <p className="font-black text-2xl md:text-5xl">안소은</p>
            <p className="font-semibold text-lg">Software Engineer</p>
          </div>
          <div className="w-2/3 flex justify-end items-center">
            <div className="grid grid-cols-3 gap-4">
              <img
                className="w-10"
                src="/images/instagram.png"
                alt="instagram"
              />
              <img className="w-10" src="/images/github.png" alt="github" />
              <img className="w-10" src="/images/linkedin.png" alt="linkedin" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row">
          <ul className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-4 flex flex-col gap-4 p-2 text-left border border-white rounded-xl ">
            <li className="relative flex-center">
              <div className="w-60 h-60 md:w-full md:h-full border-white border p-2 rounded-full">
                <img
                  className="w-60 md:w-full md:h-full rounded-full"
                  src="/images/ahnsummer.jpg"
                  alt=""
                />
              </div>
            </li>
            <li>
              <p className="text-xl font-semibold">Work Expreience</p>
              <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </li>
            <li>
              <p className="text-xl font-semibold">SKILLS</p>
            </li>
            <li>
              <p className="text-xl font-semibold">ETC</p>
            </li>
          </ul>
          <ul className="w-full md:w-3/4 flex justify-end flex-col gap-10 p-2 text-left border border-white rounded-xl">
            {/* <li>
              <p>
                1년 차 개발자로 스타트업에서 웹 서비스를
                개발/배포/운영하였습니다. 주로 프론트엔드 개발을 담당했으며
                필요에 따라 PO(Product Owner) 역할을 겸하였습니다. 작은 규모의
                팀에 첫 번째 개발자로 입사하여 50억 투자를 유치하고 40명 규모의
                팀으로 성장할 때까지 필요한 기술 역량을 책임졌던 경험이
                있습니다. 비즈니스 성장에 기여하는 일을 최우선으로 합니다. 이를
                위해 빠르게 개발하고 배포하여 딜리버리하는 역량과 데이터를
                활용하여 유저를 이해하는 역량을 쌓고자 노력해왔습니다. 또한, 큰
                임팩트는 혼자가 아닌 함께 만들 수 있다고 생각하기에 다양한
                직무의 구성원들과 적극적으로 커뮤니케이션하며 협업해왔습니다.
                반복되는 일을 자동화하고 비효율적인 프로세스를 개선하는 일을
                좋아합니다. 운영팀의 단순/루틴 업무 시간을 줄이기 위해
                지속적으로 백오피스를 개발하여 운영팀 업무 시간을 주당 70시간
                이상 줄였던 경험이 있습니다.
              </p>
            </li> */}
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </li>
            <li>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </li>
            <li>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </li>
            <li>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </li>
          </ul>
          {/* <div className="w-full">
            <hr className="border-black" />
            <div className="w-full flex py-8">
              <div className="w-1/3">
                <div className="w-60">
                  <img
                    className="w-ful h-full rounded-full"
                    src="/images/ahnsummer.JPG"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-2/3 flex-center text-left">
                <div>
                  1년 차 개발자로 스타트업에서 웹 서비스를
                  개발/배포/운영하였습니다. 주로 프론트엔드 개발을 담당했으며
                  필요에 따라 PO(Product Owner) 역할을 겸하였습니다. 작은 규모의
                  팀에 첫 번째 개발자로 입사하여 50억 투자를 유치하고 40명
                  규모의 팀으로 성장할 때까지 필요한 기술 역량을 책임졌던 경험이
                  있습니다. 비즈니스 성장에 기여하는 일을 최우선으로 합니다.
                  이를 위해 빠르게 개발하고 배포하여 딜리버리하는 역량과
                  데이터를 활용하여 유저를 이해하는 역량을 쌓고자
                  노력해왔습니다. 또한, 큰 임팩트는 혼자가 아닌 함께 만들 수
                  있다고 생각하기에 다양한 직무의 구성원들과 적극적으로
                  커뮤니케이션하며 협업해왔습니다. 반복되는 일을 자동화하고
                  비효율적인 프로세스를 개선하는 일을 좋아합니다. 운영팀의
                  단순/루틴 업무 시간을 줄이기 위해 지속적으로 백오피스를
                  개발하여 운영팀 업무 시간을 주당 70시간 이상 줄였던 경험이
                  있습니다.
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
