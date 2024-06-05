'use client';

import Link from 'next/link';

const TeamProjectGuidelines = () => {
  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        {/* 배너 */}
        <div className="bg-black h-[500px] flex justify-center items-center text-white">
          <div className="w-[1080px] h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold mb-4">개발 팀플 가이드라인</h1>
            <h2 className="text-2xl font-semibold mb-2">
              개발 팀프로젝트를 처음 시작하는 학생들에게 도움이 되는 가이드라인입니다.
            </h2>
          </div>
        </div>

        <section className="bg-white text-gray-800 w-[1080px] mx-auto py-16 px-4">
          <p className="mb-8 text-lg">
            개발 팀프로젝트를 처음 시작하는 학생들을 위해 프로젝트의 기초부터 차근차근 안내하는
            가이드라인을 제공합니다.
          </p>

          <section className="mb-8">
            <h3 className="text-3xl font-semibold mb-4">팀 프로젝트 Tip</h3>
            <hr className="border-2 mb-4" />
            <h4 className="text-xl font-semibold mb-2">빈번한 소통과 상호작용을 위한 모임</h4>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>매주 수업 이후 30분 모임 등의 일정은 지양</li>
              <li>초반일수록 더욱 빈번하게 만나서 과제에 대해서 논의하기</li>
              <li>
                규칙적인 회의 시간을 잡는다. 보통 1주에 1번씩 만나지만 언제 다른 시간이 되는지 먼저
                파악하자.
                <br />
                {`       ex) 화요일에 참여가 불가하다면 목요일로 빠르게 대체가 가능하다.(화,목 회의 가능시) `}
              </li>
            </ul>
            <h4 className="text-xl font-semibold mb-2 mt-4">
              상호작용을 위한 의도적 관심사의 섞임
            </h4>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                업무를 1/3 으로 나누는 것이 아니라, 2/3으로 나누기 (3명, 3가지 업무가 있다면
                2명/1가지 분담)
              </li>
              <li>일이 밀리더라도 일찍 끝낸 누군가가 서로 도와주기</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2 mt-4">
              최대한 짧은 주기로 진행상황 공유하고, 여러가지 아이디어를 함께 공유
            </h4>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>서로의 비난을 없애고, 자료와 함께 피드백하며 최선을 찾아가기</li>
              <li>
                월,수,토 / 화,목,일 2~3일 간격으로 15분간 자신이 작업한 것과 작업할 예정을 Slack이나
                Discord를 활용하여 스크럼 회의하여 진행상황을 주기적으로 공유하기
              </li>
            </ul>
            <h4 className="text-xl font-semibold mb-2 mt-4">
              예상외로 변수가 많으니 여유가 있다고 생각하지말자
            </h4>

            <p className="mb-4"></p>
            <h4 className="text-xl font-semibold mb-2">
              항상 회의 전에 노션을 사용해 회의 진행 내용을 미리 정리하고, 회의록을 작성하여
              공유하기
            </h4>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                조장이나 리더는 회의 전에 중점적으로 다룰 토픽과 논의할 내용을 미리 정리해두면, 회의
                시간을 단축하고 집중도를 높일 수 있다.
              </li>
            </ul>
            <h4 className="text-xl font-semibold mb-2 mt-4">도움이 될만한 노션 템플릿들</h4>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <Link
                  href="https://sasha1107.notion.site/Team-Project-Template-cdcd0a777261493eb42a035b6a12589b"
                  legacyBehavior
                >
                  <a target="_blank" className="text-blue-500 underline">
                    팀프로젝트 템플릿
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://daewony.notion.site/PRD-bc636faabeb7431887d3facfcb356e76?pvs=4"
                  legacyBehavior
                >
                  <a target="_blank" className="text-blue-500 underline">
                    스펙문서
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.notion.so/ko-kr/templates/category/meetings" legacyBehavior>
                  <a target="_blank" className="text-blue-500 underline">
                    회의 템플릿
                  </a>
                </Link>
              </li>
            </ul>
          </section>

          <div className="space-y-8 mt-10">
            <section>
              <h3 className="text-3xl font-semibold mb-4">팀 프로젝트 단계</h3>
              <hr className="border-2 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">1. 프로젝트 목표 설정</h3>
              <p className="mb-4">
                프로젝트의 최종 목표를 명확하게 정의하고 이를 통해 얻고자 하는 결과를 설정합니다.
                <br />
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://daewony.notion.site/PRD-bc636faabeb7431887d3facfcb356e76?pvs=4"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      스펙문서: 문제 정의
                    </a>
                  </Link>
                  : 프로젝트의 목적과 목표, 핵심기능이 무엇인지 파악하여 작성하면 도움이 될
                  것입니다.
                </li>
                <li>
                  <Link
                    href="https://www.atlassian.com/team-playbook/plays/goal-setting"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      Atlassian Goal Setting
                    </a>
                  </Link>
                  : Atlassian에서 제공하는 팀 목표 설정 가이드입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">2. 프로젝트 범위 정의</h3>
              <p className="mb-4">
                프로젝트의 범위를 구체적으로 설정하여 과도한 작업을 방지하고 효율적인 진행을
                돕습니다. 범위 설정 예시를 제공합니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://www.pmi.org/learning/library/scope-statement-includes-9412"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      PMI: Writing a Project Scope Statement
                    </a>
                  </Link>
                  : 프로젝트 범위 문서를 작성하는 방법을 설명합니다.
                </li>
                <li>
                  <Link
                    href="https://www.projectmanager.com/training/project-scope-management"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      ProjectManager.com: Project Scope Management
                    </a>
                  </Link>
                  : 프로젝트 범위 관리에 대한 포괄적인 가이드입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">3. 기능명세서 작성</h3>
              <p className="mb-4">
                프로젝트의 기능을 명확하게 나열하고 각각의 기능에 대한 명세서를 작성하는 방법을
                안내합니다. 작성 예시도 함께 제공합니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://www.jamasoftware.com/blog/how-to-write-a-software-requirements-specification-srs/"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      Jama Software: How to Write a Software Requirements Specification
                    </a>
                  </Link>
                  : 소프트웨어 요구사항 명세서를 작성하는 방법입니다.
                </li>
                <li>
                  <Link
                    href="https://www.geeksforgeeks.org/how-to-write-a-good-software-design-document/"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      GeeksforGeeks: How to Write a Good Software Design Document
                    </a>
                  </Link>
                  : 좋은 소프트웨어 디자인 문서를 작성하는 팁입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">4. 플로우차트 작성</h3>
              <p className="mb-4">
                프로젝트의 전체 흐름을 시각적으로 표현하는 플로우차트를 작성하는 방법을 설명합니다.
                예시 플로우차트를 통해 이해를 돕습니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link href="https://miro.com/guides/flowchart" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Miro: How to Make a Flowchart
                    </a>
                  </Link>
                  : 플로우차트를 만드는 방법입니다.
                </li>
                <li>
                  <Link href="https://miro.com/templates/flowchart/" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Miro: Flowchart Templates
                    </a>
                  </Link>
                  : 플로우차트를 그릴 수 있는 도구와 템플릿입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">5. 일정 계획 및 마일스톤 설정</h3>
              <p className="mb-4">
                프로젝트의 전체 일정을 계획하고 주요 마일스톤을 설정하는 방법을 안내합니다. 예시와
                함께 단계별 계획 수립 방법을 설명합니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://asana.com/guide/examples/project-management/project-plan"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      Asana: Project Planning
                    </a>
                  </Link>
                  : 프로젝트 계획 가이드입니다.
                </li>
                <li>
                  <Link
                    href="https://www.wrike.com/project-management-guide/faq/what-is-a-milestone-in-project-management/"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      Wrike: What is a Milestone in Project Management
                    </a>
                  </Link>
                  : 마일스톤 설정 가이드입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">6. 역할 및 책임 할당</h3>
              <p className="mb-4">
                팀원들에게 역할과 책임을 명확하게 할당하여 효율적인 협업을 촉진합니다. 역할 분담
                예시와 함께 할당 방법을 설명합니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://www.projectmanager.com/blog/project-management-team-roles"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      ProjectManager.com: Project Management Team Roles and Responsibilities
                    </a>
                  </Link>
                  : 팀 역할과 책임을 할당하는 방법입니다.
                </li>
                <li>
                  <Link href="https://asana.com/resources/raci-chart" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Asana: RACI Chart
                    </a>
                  </Link>
                  : RACI 차트를 사용하여 역할과 책임을 정의하는 방법입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">7. 협업 도구 사용</h3>
              <p className="mb-4">
                효율적인 협업을 위한 다양한 도구 (예: Slack, Trello, Jira 등)의 사용법을 안내합니다.
                각 도구의 장점과 사용 예시를 제공합니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link href="https://slack.com/resources/using-slack" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Slack: Getting Started
                    </a>
                  </Link>
                  : Slack 사용법 가이드입니다.
                </li>
                <li>
                  <Link href="https://trello.com/en-US/guide" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Trello: Getting Started Guide
                    </a>
                  </Link>
                  : Trello 시작 가이드입니다.
                </li>
                <li>
                  <Link href="https://www.atlassian.com/software/jira/guides" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Jira: Getting Started
                    </a>
                  </Link>
                  : Jira 사용법 가이드입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">8. 주기적인 회의</h3>
              <p className="mb-4">
                정기적인 회의를 통해 프로젝트 진행 상황을 점검하고 문제를 해결하는 방법을
                안내합니다. 회의 진행 방법과 예시를 제공합니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://www.atlassian.com/team-playbook/plays/health-monitor"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      Atlassian: Health Monitor
                    </a>
                  </Link>
                  : 팀 회의를 통한 건강 상태 모니터링 방법입니다.
                </li>
                <li>
                  <Link href="https://www.hubspot.com/marketing-statistics" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      HubSpot: How to Run a Meeting
                    </a>
                  </Link>
                  : 회의 진행 방법에 대한 가이드입니다.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">9. Git 사용법</h3>
              <p className="mb-4">
                버전 관리를 위한 Git 사용법을 자세히 설명합니다. 기본적인 명령어와 함께 실제 사용
                예시를 통해 이해를 돕습니다.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link href="https://git-scm.com/doc" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Git Documentation
                    </a>
                  </Link>
                  : Git 공식 문서입니다.
                </li>
                <li>
                  <Link href="https://www.atlassian.com/git/tutorials" legacyBehavior>
                    <a target="_blank" className="text-blue-500 underline">
                      Atlassian Git Tutorials
                    </a>
                  </Link>
                  : Git 튜토리얼과 가이드입니다.
                </li>
              </ul>
              <h4 className="text-xl font-semibold mb-2 mt-4">깃허브 관련 영상</h4>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <Link
                    href="https://www.youtube.com/watch?v=lelVripbt2M&pp=ygUM6rmD7IKs7Jqp67KV"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      GitHub 사용법 1
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/watch?v=tkkbYCajCjM&t=687s&pp=ygUM6rmD7IKs7Jqp67KV"
                    legacyBehavior
                  >
                    <a target="_blank" className="text-blue-500 underline">
                      GitHub 사용법 2
                    </a>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default TeamProjectGuidelines;
