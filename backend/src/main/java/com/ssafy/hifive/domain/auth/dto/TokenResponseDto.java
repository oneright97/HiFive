package com.ssafy.hifive.domain.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TokenResponseDto {
	private String accessToken;
	private String refreshToken;

}