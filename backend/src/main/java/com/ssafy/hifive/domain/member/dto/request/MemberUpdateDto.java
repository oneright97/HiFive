package com.ssafy.hifive.domain.member.dto.request;

import com.ssafy.hifive.domain.member.entity.Member;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public final class MemberUpdateDto {
	private String profileImg;
	private String nickname;

	public Member toEntity(Member member) {
		return Member.builder()
			.profileImg(profileImg)
			.nickname(nickname)
			.build();
	}
}
